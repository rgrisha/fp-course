TEX = xelatex
DOCFILE=main
CHAPTERS=chapter1.tex

$(DOCFILE).pdf : $(DOCFILE).tex structure.tex $(CHAPTERS) bibliography.bib
	$(TEX) $(DOCFILE).tex
	echo "=============================================="
	$(TEX) $(DOCFILE).tex

clean:
	rm -f $(DOCFILE).idx $(DOCFILE).aux $(DOCFILE).bcf $(DOCFILE).log $(DOCFILE).pdf $(DOCFILE).ptc $(DOCFILE).run.xml $(DOCFILE).toc 


