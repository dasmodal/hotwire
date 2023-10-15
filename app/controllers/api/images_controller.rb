module Api
  class ImagesController < ApplicationController
    def update
      @image = Image.find(params[:id])

      @image.update!(title: params[:title])

      head :ok
    end
  end
end
