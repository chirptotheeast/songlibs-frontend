class SongylibsController < ApplicationController
  def index
    songylibs = Songylib.all
    render json: songylibs
  end

  def show
    songylib = Songylib.find(params[:id])
    render json: songlib
  end
end
