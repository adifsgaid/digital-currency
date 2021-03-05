module Api
  module V1
    class ReviewsController < ApplicationController
      protect_from_forgery with: :null_session

      def create
        review = currency.reviews.new(review_params)

        if review.save
          render json: ReviewSerializer.new(review).serialized_json
        else
          render json: { error: review.errors.full_messages }, status: 422
        end
      end

      def destroy
        review = review.find_by(:id)

        if review.destroy
          head :no_content
        else
          render json: { error: review.errors.full_messages }, status: 422
        end
      end

      private

      def currency
        @currency ||= Currency.find(params[:currency_id])
      end

      def review_params
        params.require(:review).permit(:title, :description, :rating, :currency_id)
      end
    end
  end
end
