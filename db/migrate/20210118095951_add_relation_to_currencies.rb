class AddRelationToCurrencies < ActiveRecord::Migration[6.1]
  def change
    add_reference :reviews, :currencies, foreign_key: true
  end
end
