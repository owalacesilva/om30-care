FactoryBot.define do
  factory :resident do
    town { association :town }

    full_name { Faker::Name.first_name }
    cpf { '406.814.578-48' }
    cns { Faker::Name.first_name }
    email { Faker::Internet.email }
    gender { 'undefined' }
    birth_date { Faker::Date.backward(days: 10_950) } # 30 years
    phone_number { Faker::PhoneNumber.cell_phone }

    trait :active do
      active { true }
    end

    trait :desactive do
      active { false }
    end

    trait :male do 
      gender { 'male'}
    end

    trait :female do 
      gender { 'female'}
    end
  end
end
