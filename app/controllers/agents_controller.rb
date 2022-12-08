class AgentsController < ApplicationController
  def index
    render json: Agent.all, each_serializer: AgentWithSellerSerializer, status: :ok
  end

  def create
    agent = Agent.create(my_params)
    render json: agent, status: :created
  end

  def show
    agent = Agent.find(params[:id])
    render json: agent, status: :success
  end

  def destroy
    agent = Agent.find(params[:id])
    agent.destroy
    head :no_content
  end

  def update
    agent = Agent.find(params[:id])
    agent.update(my_params)
    render json: agent, status: :updated
  end

  private

  def my_params
    params.require(:agent).permit(:name, :company, :license_number)
  end
end
