class WelcomeController < ApplicationController
# before_action :require_user, only: [:index, :show]

  def index
    # @user = User.new
    if current_user
      @user_skill = Skill.find_by(:user_id =>current_user.id)
    end

  end

end
