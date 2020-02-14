TEX = xelatex
DOCFILE=main

$(DOCFILE).pdf : $(DOCFILE).tex structure.tex bibliography.bib
	$(TEX) $(DOCFILE).tex
	echo "=============================================="
	$(TEX) $(DOCFILE).tex

clean:
	rm $(DOCFILE).idx $(DOCFILE).aux $(DOCFILE).bcf $(DOCFILE).log $(DOCFILE).pdf $(DOCFILE).ptc $(DOCFILE).run.xml $(DOCFILE).toc 


