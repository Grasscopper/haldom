class Api::CommunitiesController < ApplicationController
  def index
    render json: {
      communities: Community.all,
      currentUser: current_user
    }
  end

  def create
    if current_user.admin?
      render json: Community.create(community_params)
    end
  end

  def destroy
    if current_user.admin?
      Community.find(params["id"]).delete
      render json: Community.all
    end
  end

  def community_params
    params.require(:community).permit(:id, :name, :description)
  end
end
