class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :currencies_id
end
