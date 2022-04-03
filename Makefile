.PHONY: setup-development setup-asdf vendor dev

setup-development: setup-asdf vendor
	blackbox_decrypt_all_files

setup-asdf:
	asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git || true
	asdf plugin-add yarn || true
	asdf install

vendor:
	yarn

dev:
	yarn dev