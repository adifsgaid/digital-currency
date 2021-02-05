class CurrencySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :slug, :img_url

  has_many :reviews
end
