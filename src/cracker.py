from os import getenv, listdir
import fnmatch
from shutil import copyfile

path = getenv("HOME") + "/.vscode-oss/extensions/"

for monokai in listdir(path):
    if fnmatch.fnmatch(monokai, 'monokai*'):
        copyfile("app.js", "{0}/{1}/js/app.js".format(path, monokai))