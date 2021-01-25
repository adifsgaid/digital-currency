module Api
  module V1
    class CurrenciesController < ApplicationController
      def index
        currencies = Currency.all

        render json: CurrencySerializer.new(currencies).serialized_json
      end

      def show
        currency = Currency.find(slug: params[:slug])

        render json: CurrencySerializer.new(currencies).serialized_json
      end

      def create
        currency = Currency.new(currency_params)

        if currency.save
          render json: CurrencySerializer.new(currencies).serialized_json
        else
          render json: { error: currency.errors.full_messages }, status: 422
        end
      end

      private

      def currency_params
        params.require(:currency).permit(:name, :img_url)
      end
    end
  end
end
