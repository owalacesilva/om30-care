class TownsController < ApplicationController
  respond_to? :json
  wrap_parameters :town, format: [:json, :url_encoded_form]
  skip_before_action :verify_authenticity_token

  def index
    towns = Town.all
    render json: { count: Town.count, rows: towns }, status: :ok
  end

  def show
    town = Town.find(params[:id])
    render json: { town: town }, status: :ok
  end

  def create
    town = Town.new(town_params)

    if town.save
      render json: { town: town }, status: :created
    else
      render json: { errors: town.errors }, status: :bag_request
    end
  end

  def update
    town = Town.find(params[:id])

    if town.update(town_params)
      render json: { town: town }, status: :ok
    else
      render json: { errors: town.errors }, status: :bag_request
    end
  end

  private

  def town_params
    params.require(:town).permit(%i[display_name description url state country])
  end
end
