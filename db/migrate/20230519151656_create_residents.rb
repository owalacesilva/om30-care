# frozen_string_literal: true

class CreateResidents < ActiveRecord::Migration[6.1]
  def up
    create_table :residents do |t|
      # Timestamps
      t.timestamps null: false

      # References
      t.references :town, null: false, foreign_key: { on_delete: :cascade, on_update: :cascade }

      # Columns
      t.string :full_name, null: false, limit: 45
      t.string :cpf, null: false
      t.string :cns, null: false
      t.string :email, null: false, unique: true
      t.string :gender, null: false, limit: 9, default: "undefined"
      t.date :birth_date
      t.string :phone_number
      t.boolean :active, default: true
    end
  end

  def down
    drop_table :residents
  end
end
