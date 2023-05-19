class Validators::EmailValidator < ActiveModel::Validator
  EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

  def validate(record)
    value = record.email

    return if value.blank? || value.match?(EMAIL_REGEX)

    record.errors.add :email, 'is not a valid email address'
  end
end
