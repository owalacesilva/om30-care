class Validators::CpfDocumentValidator < ActiveModel::Validator
  def validate(record)
    return if valid_cpf?(record.cpf)

    record.errors.add :cpf, 'is invalid'
  end

  private

  def valid_cpf?(value)
    cpf_number = value.gsub(/\D/, '') # Remove non-digit characters

    return false if cpf_number.blank?
    
    return false unless cpf_number.length == 11 # CPF must have 11 digits
    
    numbers = cpf_number[0..8].chars.map(&:to_i)
    verifier_digits = cpf_number[9..10].chars.map(&:to_i)
    
    # Calculate the first verifier digit
    sum = 0
    10.downto(2) do |weight|
      sum += numbers.pop * weight
    end
    expected_digit_1 = (sum * 10) % 11
    expected_digit_1 = 0 if expected_digit_1 == 10
    
    # Calculate the second verifier digit
    sum = 0
    numbers.push(expected_digit_1)
    11.downto(2) do |weight|
      sum += numbers.pop * weight
    end
    expected_digit_2 = (sum * 10) % 11
    expected_digit_2 = 0 if expected_digit_2 == 10
    
    verifier_digits == [expected_digit_1, expected_digit_2]
  end
end

