function listeJoueurss2(nu, action) {
    let tablee = ['i', 'j', 'k', 'l', 'm', "1", 'n', 'o', ")", ".", ",", 'p', 'q', 'r', "<", 's', 't', 'u', 'v', 'w',
      'd', 'e', 'x', 'y', "Q", "R", "S", "T", "U", 'z', "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
      "M", "N", "O", "P", "V", 'a', 'b', 'c', 'f', 'g', 'h', "W", "X", "Y", "Z", ";"
    ]
    let bl = nu;
    let rcy = "";
    for (var i = 0; i < bl.length; i++) {
      let positionUn = tablee.indexOf(bl[i]);
      let n = null;
      if (positionUn != "-1") {
        n = action == 'encrypt' ? positionUn + 4 : positionUn - 4;
        if (n >= 58) {
          n = n - 58;
        } else if (n < 0) {
          n = n + 58;
        }
        s = tablee[n];
      } else {
        s = bl[i]
      }
      rcy += s;
    }
    return rcy;
  }
