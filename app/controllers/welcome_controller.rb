class WelcomeController < ApplicationController
# before_action :require_user, only: [:index, :show]

  def index
    # @user = User.new
    if current_user
      @user_skill = Skill.find_by(:user_id =>current_user.id)
      @skills = []
      if @user_skill.respond_to?(:skill1)
        @skills << @user_skill.skill1
      end

      if @user_skill.respond_to?(:skill2)
        @skills << @user_skill.skill2
      end

      if @user_skill.respond_to?(:skill3)
        @skills << @user_skill.skill3
      end

      if @user_skill.respond_to?(:skill4)
        @skills << @user_skill.skill4
      end

      if @user_skill.respond_to?(:skill5)
        @skills << @user_skill.skill5
      end

    end


    end

end
