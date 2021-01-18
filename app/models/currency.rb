class Currency < ApplicationRecord
  has_many :reviews
  before_create :slugify

  def slugify
    self.slug = name.parameterize
  end

  def avg_score
    reviews.average(:rating).round(2).to_f
  end
end
