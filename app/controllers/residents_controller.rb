class ResidentsController < ApplicationController
  respond_to? :json
  wrap_parameters :resident, format: [:json, :url_encoded_form]

  def index
    residents = Resident.where(town_id: params[:town_id])
    render json: { count: Resident.count, rows: residents }, status: :ok
  end

  def show
    resident = Resident.find(params[:id])
    render json: { resident: resident }, status: :ok
  end

  def create
    town = Town.find(params[:town_id])
    resident = Resident.new(resident_params)
    resident.town = town

    if resident.save
      render json: { resident: resident }, status: :created
    else
      render json: { errors: resident.errors }, status: :bag_request
    end
  end

  def update
    resident = Resident.find(params[:id])

    if resident.update(resident_params)
      render json: { resident: resident }, status: :ok
    else
      render json: { errors: resident.errors }, status: :bag_request
    end
  end

  private

  def resident_params
    params.require(:resident).permit(%i[full_name cpf cns email gender birth_date phone_number active])
  end
end
