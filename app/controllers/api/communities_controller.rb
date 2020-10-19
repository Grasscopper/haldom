class Api::CommunitiesController < ApplicationController
  def index
    # anybody can read communities
    # only admins can create, update, and delete communities
    render json: {
      communities: Community.all.order(:id),
      currentUser: current_user
    }
  end

  def show
    community = Community.find(params["id"])
    render json: {
      community: serialized_data(community, CommunitySerializer),
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

  def update
    if current_user.admin?
      Community.find(params["id"]).update(community_params)
      render json: Community.all.order(:id)
    end
  end

  def serialized_data(data, serializer)
   ActiveModelSerializers::SerializableResource.new(data, serializer: serializer)
  end

  def community_params
    params.require(:community).permit(:id, :name, :description)
  end
end
