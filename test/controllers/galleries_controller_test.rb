require 'test_helper'

class GalleriesControllerTest < ActionController::TestCase
  test "should get showcase" do
    get :showcase
    assert_response :success
  end

end
