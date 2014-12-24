echo 'hi'


# Kenny's Personal Shell Settings
export PS1="\n\[\033[1;37m\]\[\033[4;37m\](\d, \t)\[\033[0;33m\]\[\033[1;33m\] \u\[\033[m\]@\[\033[1;37m\]\h: \[\033[33;1m\][\w]\[\033[m\]\n\[\033[1;37m\]=>\[\033[m\]"
#export PS1="\[\e[1m\]________________________________________________________________________________\n\[\e[1;30;47m\]| \W @ \h (\u) \n| => \[\e[0m\]"
#export PS2="\[\e[1;30;47m\]| => \[\e[0m\]"
export CLICOLOR=1
export LSCOLORS=GxFxCxDxBxegedabagaced
export PATH="/c/Program Files/nodejs":$PATH
export PATH="/c/Program Files/Sublime Text 2":$PATH
export PATH="/c/Python27/":$PATH
export PATH="/c/Program Files (x86)\Google\Chrome\Application":$PATH
alias ls='ls -GFh'
alias lls='ls -GFhltr'
alias h=history

alias server='chrome http://localhost:8000 && python -m SimpleHTTPServer'
alias website='cd ~/website/starbox-website'
