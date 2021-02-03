class SongylibsController < ApplicationController
  def index
    songylibs = Songylib.all
    render json: songylibs
  end

  def show
    songylib = Songylib.find(params[:id])
    render json: songlib
  end

  def create
    songyLibnew = Songylib.create(songy_params)
    render json: songyLibnew
  end 

  def songy_params
    params.require(:songylib).permit(:user_id, :song_id, :user_input)
  end
end
