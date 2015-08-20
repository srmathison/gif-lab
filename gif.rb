def generate_command(string, i)
  # create the command we want to run
  
  # three quotes creates a multi line string
  command = """
     convert -background lightblue -fill blue \
          -font Helvetica -pointsize 72 label:\"#{string}\"\
          label#{i}.gif
  """
end


def img_from_text(string)
  
  chars = string.split('')
  chars.each_with_index do |char,i|
    string_so_far = chars[0..i].join
    command = generate_command(string_so_far, i)
    `#{command}`
  end

end

# puts ARGV[0]

# call method
img_from_text(ARGV[0])






