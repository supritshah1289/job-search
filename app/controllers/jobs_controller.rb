class JobsController < ApplicationController
  def new

    keywords = params[:keywords]
    puts keywords
    api_key = 

     url = "https://authenticjobs.com/api/?api_key=" +api_key + "+&method=aj.jobs.search&perpage=20"
    response = HTTParty.get(url)
    parsed_body = Crack::XML.parse(response.body)
    # puts parsed_body.to_json
    render json: parsed_body
  end




end
