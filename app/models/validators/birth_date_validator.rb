class Validators::BirthDateValidator < ActiveModel::Validator
  def validate(record)
    value = record.birth_date

    return if value.blank? || valid_birth_date?(value)

    record.errors.add :birth_date, 'is not a valid birth date'
  end

  private

  def valid_birth_date?(value)
    Date.parse(value.to_s)
    true
  rescue ArgumentError
    false
  end
end
