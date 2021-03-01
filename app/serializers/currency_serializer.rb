class CurrencySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :slug, :img_url, :avg_score

  has_many :reviews
end
 