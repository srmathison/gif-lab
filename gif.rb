# create the command we want to run
def command(string, i)
 # three quotes creates a multi line string
 """
    convert -background black -fill white \
         -size 500x500 -pointsize 72 -gravity center label:\"#{string.gsub(' ',"\n")}\"\
         image_#{i}.gif
 """

end

def img_from_text(string)
 chars = string.split('')
 # splits into characters then joins with previous on
 # to show progression of typing
 chars.each_with_index do |c, i|

   `#{command(string[0..i], i)}`
 end

end

puts ARGV[0]

# call on command
img_from_text(ARGV[0])
`convert -delay 20 -loop 0 image_?.gif image_??.gif  animation.gif`



