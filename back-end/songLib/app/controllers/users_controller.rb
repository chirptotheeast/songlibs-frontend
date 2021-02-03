class UsersController < ApplicationController
  def index
    #users = User.all
    options = { 
        :include => {
          :songylibs => {
            :except => [:created_at, :updated_at]
          }
        },
         :except => [:created_at, :updated_at]
    }
    render json: User.all.to_json(options)
  end

  def show
     options = { 
        :include => {
          :songylibs => {
            :except => [:created_at, :updated_at]
          }
        },
         :except => [:created_at, :updated_at]
    }
    render json: User.find(params[:id]).to_json(options)
  end

end
