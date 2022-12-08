class UsersController < ApplicationController
  def index
    render json: User.all, status: :ok
  end

  def create
    user = User.create(my_params)
    render json: user, atatus: :created
  end

  def show
    user = User.find(params[:id])
    render json: user, status: :success
  end

  def delete
    user = User.find(params[:id])
    user.destroy
    head :no_content
  end

  def update
    user = User.find(params[:id])
    user.update(my_params)
    render json: user, status: :updated
  end

  def session 
    user = User.find_by_email(params[:email])

    if !user.nil? && user.password == params[:password]
      render json: user, status: :ok
    else
      render json: {message: 'wrong password or email'}, status: 401
    end
  end

  private

  def my_params
    params.require(:user).permit(:name, :email, :password, :agency1_id)
  end
end
