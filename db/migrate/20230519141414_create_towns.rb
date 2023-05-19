# frozen_string_literal: true

class CreateTowns < ActiveRecord::Migration[6.1]
  def up
    create_table :towns do |t|
      # Timestamps
      t.timestamps null: false

      # Columns
      t.string :display_name, null: false, limit: 45
      t.text :description
      t.string :url, limit: 255
      t.string :state
      t.string :state_abbr
      t.string :country
      t.string :country_code
    end
  end

  def down
    drop_table :towns
  end
end
