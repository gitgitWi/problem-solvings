export ZSH="/root/.oh-my-zsh"

ZSH_THEME="random"

plugins=(git themes zsh-autosuggestions zsh-syntax-highlighting asdf)

fpath=(${ASDF_DIR}/completions $fpath)
autoload -Uz compinit && compinit

source $ZSH/oh-my-zsh.sh
