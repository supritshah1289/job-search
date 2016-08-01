class SkillsController < ApplicationController
  before_action :current_user

  def index
    @skill = Skill.new
  end


  def create
  @user = session[:user_id]
  puts "user id #{@user}"

    @skill = User.find(session[:user_id]).Skill.new(skill_params)
    if @skill.save
        flash[:success] = "Skills added!"
        redirect_to root_url
    else
      head 422
    end
  end



  private

  def skill_params

    params.require(:skill).permit(:skill1, :skill2, :skill3, :skill4, :skill5,:skill6, :skill7, :skill8, :skill9, :skill10)
  end


end
