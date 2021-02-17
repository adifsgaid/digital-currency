module Api

  module V1

    class CurrenciesController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        currencies = Currency.all

        render json: CurrencySerializer.new(currencies, options).serialized_json
      end

      def show
        currency = Currency.find_by(slug: params[:slug])

        render json: CurrencySerializer.new(currency, options).serialized_json
      end

      def create
        currency = Currency.new(currency_params)

        if currency.save
          render json: CurrencySerializer.new(currency).serialized_json
        else
          render json: { error: currency.errors.full_messages }, status: 422
        end
      end

      def update
        currency = Currency.find_by(:slug)

        if currency.update(currency_params)
          render json: CurrencySerializer.new(currency, options).serialized_json
        else
          render json: { error: currency.errors.full_messages }, status: 422 # it's unprosseced entity
        end
      end

      def destroy
        currency = Currency.find_by(:slug)

        if currency.destroy
          head :no_content
        else
          render json: { error: currency.errors.full_messages }, status: 422
        end
      end

      private

      def currency_params
        params.require(:currency).permit(:name, :img_url)
      end

      # we created so we can do a coumpund get request to each currency whit their reviews
      def options
        @options ||= { include: %i[reviews] }
      end
    end
  end
end
