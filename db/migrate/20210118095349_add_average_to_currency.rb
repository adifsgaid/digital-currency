class AddAverageToCurrency < ActiveRecord::Migration[6.1]
  def change
    add_column :currencies, :average_score, :integer, default: 0
  end
end
