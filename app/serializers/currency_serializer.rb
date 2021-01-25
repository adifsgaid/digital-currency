class CurrencySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :img_url, :slug

  has_many :reviews
end
