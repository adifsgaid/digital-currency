class AddRelationToCurrencies < ActiveRecord::Migration[6.1]
  def change
    add_reference :reviews, :currency, foreign_key: true
  end
end
