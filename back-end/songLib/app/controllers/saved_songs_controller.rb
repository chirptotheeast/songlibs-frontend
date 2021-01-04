class SavedSongsController < ApplicationController
  def index
    saved_songs = SavedSong.all
    render json: saved_songs
  end

  def show
    saved_song = SavedSong.find(params[:id])
    render json: saved_song
  end

  def create
  end

  def new
  end
end
