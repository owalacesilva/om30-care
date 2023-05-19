FactoryBot.define do
  factory :town do
    display_name { Faker::Nation.nationality }
    description { Faker::Lorem.paragraph(sentence_count: 3) }
    state { Faker::Address.state }
    state_abbr { Faker::Address.state_abbr }
    country { Faker::Address.country }
    country_code { Faker::Address.country_code }
  end
end
