class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  
  attributes :title, :description, :rating, :currency_id
end
