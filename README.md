# test-repo
a github-native [3d model viewer](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-stl-3d-models) that nobody asked for
```stl
solid cube_corner
  facet normal 0.0 -1.0 0.0
    outer loop
      vertex 0.0 0.0 0.0
      vertex 1.0 0.0 0.0
      vertex 0.0 0.0 1.0
    endloop
  endfacet
  facet normal 0.0 0.0 -1.0
    outer loop
      vertex 0.0 0.0 0.0
      vertex 0.0 1.0 0.0
      vertex 1.0 0.0 0.0
    endloop
  endfacet
  facet normal -1.0 0.0 0.0
    outer loop
      vertex 0.0 0.0 0.0
      vertex 0.0 0.0 1.0
      vertex 0.0 1.0 0.0
    endloop
  endfacet
  facet normal 0.577 0.577 0.577
    outer loop
      vertex 1.0 0.0 0.0
      vertex 0.0 1.0 0.0
      vertex 0.0 0.0 1.0
    endloop
  endfacet
endsolid
```

test repo

this line was rebased and merged from a PR branch

Q: Can I sneak in a commit using PR? [main]

rebase seems to be cleaner and avoids that dirty extra "merge x into y" commit
content proposed by PR
more content changes incoming

A: Uhhh.. I'll try [PR]

- [relative link w/o slash](c-source.mjs)
- [absolute link w/ leading slash (system root)](/c-source.mjs)
- [relative link w/ period & leading slash](./c-source.mjs)
- [relative `/blob/branch/file` link](./blob/main/c-source.mjs)
- [relative slashless link w/ line-num hash](c-source.mjs#L20-L23)
