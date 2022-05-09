FROM node:lts-alpine

RUN apk update
RUN apk upgrade
RUN apk add build-base zsh curl wget git util-linux libuser

RUN git config --global init.defaultBranch main
RUN git config --global user.name "gitgitWi"
RUN git config --global user.email "wiii@kakao.com"
RUN git config --global core.eol lf
RUN git config --global core.autocrlf false

# oh-my-zsh
RUN zsh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
RUN git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
RUN git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
RUN wget "https://gist.githubusercontent.com/gitgitWi/93f3583109ac09076fbef6b64c76536f/raw/27a6dee2807396816f9b292ccf3f69c89155b587/.zshrc" -O $HOME/.zshrc
