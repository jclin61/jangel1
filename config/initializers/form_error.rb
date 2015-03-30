# The following script overrides the scaffold or rails default error validation action. 
# Scaffolding ususally writes field_with_errors which adds div and a break that
# breaks the form styling. The code below adds the class "error" instead and nothing else.


ActionView::Base.field_error_proc = Proc.new do |html_tag, instance|
  class_attr_index = html_tag.index 'class="'

  if class_attr_index
    html_tag.insert class_attr_index+7, 'form_field_error '
  else
    html_tag.insert html_tag.index('>'), ' class="form_label_error"'
  end
end