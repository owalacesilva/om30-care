# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_05_19_203009) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "resident_id", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "phone_number"
    t.string "alternative_phone_number"
    t.string "company_name"
    t.string "postal_code"
    t.string "street_address"
    t.string "building_number"
    t.string "recipient"
    t.string "apartament"
    t.string "door_code"
    t.string "floor"
    t.string "neighborhood"
    t.string "city"
    t.string "state"
    t.string "state_abbr"
    t.string "country"
    t.string "country_code"
    t.string "latitude"
    t.string "longitude"
    t.index ["resident_id"], name: "index_addresses_on_resident_id"
  end

  create_table "residents", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "town_id", null: false
    t.string "full_name", limit: 45, null: false
    t.string "cpf", null: false
    t.string "cns", null: false
    t.string "email", null: false
    t.string "gender", limit: 9, default: "undefined", null: false
    t.date "birth_date"
    t.string "phone_number"
    t.boolean "active", default: true
    t.index ["town_id"], name: "index_residents_on_town_id"
  end

  create_table "towns", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "display_name", limit: 45, null: false
    t.text "description"
    t.string "url", limit: 255
    t.string "state"
    t.string "state_abbr"
    t.string "country"
    t.string "country_code"
  end

  add_foreign_key "addresses", "residents", on_update: :cascade, on_delete: :cascade
  add_foreign_key "residents", "towns", on_update: :cascade, on_delete: :cascade
end
