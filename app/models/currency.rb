class Currency < ApplicationRecord
  has_many :reviews
  before_create :slugify

  def slugify
    self.slug = name.parameterize
  end

  def avg_score
    # return 0 unless reviews.count.positive?

    reviews.average(:rating).present? ? reviews.average(:rating).round(2) : 0
  end
end
