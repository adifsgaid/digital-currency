class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :currency_id
end
