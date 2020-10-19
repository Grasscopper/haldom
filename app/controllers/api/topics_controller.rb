class Api::TopicsController < ApplicationController
  # anybody can read topics
  # only users and admins can create and update topics
  # only admins can delete topics
  def create
    if user_signed_in?
      Topic.create(topic_params)
      render json: Community.find(params["community_id"])
    end
  end

  def topic_params
    params.require(:topic).permit(:id, :name, :description, :community_id)
  end
end
