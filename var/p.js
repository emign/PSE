var ps = new Array();

	ps[1] = "Allgemeines";
	ps[2] = "Pr&auml;vention";
	ps[3] = "Reaktion";
	ps[4] = "Aufbewahrung";
	ps[5] = "Entsorgung";
	
	
    ps[101] = "Ist &auml;rztlicher Rat erforderlich, Verpackung oder Kennzeichnungsetikett bereithalten";
    ps[102] = "Darf nicht in die H&auml;nde von Kindern gelangen";
    ps[103] = "Vor Gebrauch Kennzeichnungsetikett lesen";
	
    ps[201] = "Vor Gebrauch besondere Anweisungen einholen";
    ps[202] = "Vor Gebrauch alle Sicherheitshinweise lesen und verstehen";
    ps[210] = "Von Hitze / Funken / offener Flamme / hei&szlig;en Oberfl&auml;chen fernhalten. Nicht rauchen";
    ps[211] = "Nicht gegen offene Flamme oder andere Z&uuml;ndquelle spr&uuml;hen";
    ps[220] = "Von Kleidung /…/ brennbaren Materialien fernhalten/entfernt aufbewahren";
    ps[221] = "Mischen mit brennbaren Stoffen /… unbedingt verhindern";
    ps[222] = "Kontakt mit Luft nicht zulassen";
    ps[223] = "Kontakt mit Wasser wegen heftiger Reaktion und m&ouml;glichem Aufflammen unbedingt verhindern";
    ps[230] = "Feucht halten mit …";
    ps[231] = "Unter inertem Gas handhaben";
    ps[232] = "Vor Feuchtigkeit sch&uuml;tzen";
    ps[233] = "Beh&auml;lter dicht verschlossen halten";
    ps[234] = "Nur im Originalbeh&auml;lter aufbewahren";
    ps[235] = "K&uuml;hl halten";
    ps[240] = "Beh&auml;lter und zu bef&uuml;llende Anlage erden";
    ps[241] = "Explosionsgesch&uuml;tzte elektrische Betriebsmittel / L&uuml;ftungsanlagen / Beleuchtung /... verwenden";
    ps[242] = "Nur funkenfreies Werkzeug verwenden";
    ps[243] = "Maßnahmen gegen elektrostatische Aufladungen treffen";
    ps[244] = "Druckminderer frei von Fett und &Ouml;l halten";
    ps[250] = "Nicht schleifen / stoßen /.../ reiben";
    ps[251] = "Beh&auml;lter steht unter Druck: Nicht durchstechen oder verbrennen, auch nicht nach der Verwendung";
    ps[260] = "Staub / Rauch / Gas / Nebel / Dampf / Aerosol nicht einatmen";
    ps[261] = "Einatmen von Staub / Rauch / Gas / Nebel / Dampf / Aerosol vermeiden";
    ps[262] = "Nicht in die Augen, auf die Haut oder auf die Kleidung gelangen lassen";
    ps[263] = "Kontakt w&auml;hrend der Schwangerschaft / und der Stillzeit vermeiden";
    ps[264] = "Nach Gebrauch ... gr&uuml;ndlich waschen";
    ps[270] = "Bei Gebrauch nicht essen, trinken oder rauchen";
    ps[271] = "Nur im Freien oder in gut bel&uuml;fteten R&auml;umen verwenden";
    ps[272] = "Kontaminierte Arbeitskleidung nicht außerhalb des Arbeitsplatzes tragen";
    ps[273] = "Freisetzung in die Umwelt vermeiden";
    ps[280] = "Schutzhandschuhe / Schutzkleidung / Augenschutz / Gesichtsschutz tragen";
    ps[281] = "Vorgeschriebene pers&ouml;nliche Schutzausr&uuml;stung verwenden";
    ps[282] = "Schutzhandschuhe / Gesichtsschild / Augenschutz mit K&auml;lteisolierung tragen";
    ps[283] = "Schwer entflammbare / flammhemmende Kleidung tragen";
    ps[284] = "Atemschutz tragen";
    ps[285] = "Bei unzureichender Bel&uuml;ftung Atemschutz tragen";
	
    ps[301] = "Bei Verschlucken:";
    ps[302] = "Bei Ber&uuml;hrung mit der Haut:";
    ps[303] = "Bei Ber&uuml;hrung mit der Haut (oder dem Haar):";
    ps[304] = "Bei Einatmen:";
    ps[305] = "Bei Kontakt mit den Augen:";
    ps[306] = "Bei kontaminierter Kleidung:";
    ps[307] = "Bei Exposition:";
    ps[308] = "Bei Exposition oder falls betroffen:";
    ps[309] = "Bei Exposition oder Unwohlsein:";
    ps[310] = "Sofort Giftinformationszentrum oder Arzt anrufen";
    ps[311] = "Giftinformationszentrum oder Arzt anrufen";
    ps[312] = "Bei Unwohlsein Giftinformationszentrum oder Arzt anrufen";
    ps[313] = "&auml;rztlichen Rat einholen / &auml;rztliche Hilfe hinzuziehen";
    ps[314] = "Bei Unwohlsein &auml;rztlichen Rat einholen / &auml;rztliche Hilfe hinzuziehen";
    ps[315] = "Sofort &auml;rztlichen Rat einholen / &auml;rztliche Hilfe hinzuziehen";
    ps[320] = "Besondere Behandlung dringend erforderlich (siehe … auf diesem Kennzeichnungsetikett)";
    ps[321] = "Besondere Behandlung (siehe … auf diesem Kennzeichnungsetikett)";
    ps[322] = "Gezielte Maßnahmen (siehe … auf diesem Kennzeichnungsetikett)";
    ps[330] = "Mund aussp&uuml;len";
    ps[331] = "Kein Erbrechen herbeif&uuml;hren";
    ps[332] = "Bei Hautreizung:";
    ps[333] = "Bei Hautreizung oder -ausschlag:";
    ps[334] = "In kaltes Wasser tauchen / nassen Verband anlegen";
    ps[335] = "Lose Partikel von der Haut abb&uuml;rsten";
    ps[336] = "Vereiste Bereiche mit lauwarmem Wasser auftauen. Betroffenen Bereich nicht reiben";
    ps[337] = "Bei anhaltender Augenreizung:";
    ps[338] = "Eventuell vorhandene Kontaktlinsen nach M&ouml;glichkeit entfernen. Weiter aussp&uuml;len";
    ps[340] = "Die betroffene Person an die frische Luft bringen und in einer Position ruhigstellen, die das Atmen erleichtert";
    ps[341] = "Bei Atembeschwerden an die frische Luft bringen und in einer Position ruhigstellen, die das Atmen erleichtert";
    ps[342] = "Bei Symptomen der Atemwege:";
    ps[350] = "Behutsam mit viel Wasser und Seife waschen";
    ps[351] = "Einige Minuten lang behutsam mit Wasser aussp&uuml;len";
    ps[352] = "Mit viel Wasser und Seife waschen";
    ps[353] = "Haut mit Wasser abwaschen / duschen";
    ps[360] = "Kontaminierte Kleidung und Haut sofort mit viel Wasser abwaschen und danach Kleidung ausziehen";
    ps[361] = "Alle kontaminierten Kleidungsst&uuml;cke sofort ausziehen";
    ps[362] = "Kontaminierte Kleidung ausziehen und vor erneutem Tragen waschen";
    ps[363] = "Kontaminierte Kleidung vor erneutem Tragen waschen";
    ps[370] = "Bei Brand:";
    ps[371] = "Bei Großbrand und großen Mengen:";
    ps[372] = "Explosionsgefahr bei Brand";
    ps[373] = "Keine Brandbek&auml;mpfung, wenn das Feuer explosive Stoffe / Gemische / Erzeugnisse erreicht";
    ps[374] = "Brandbek&auml;mpfung mit &uuml;blichen Vorsichtsmaßnahmen aus angemessener Entfernung";
    ps[375] = "Wegen Explosionsgefahr Brand aus der Entfernung bek&auml;mpfen";
    ps[376] = "Undichtigkeit beseitigen, wenn gefahrlos m&ouml;glich";
    ps[377] = "Brand von ausstr&ouml;mendem Gas: Nicht l&ouml;schen, bis Undichtigkeit gefahrlos beseitigt werden kann";
    ps[378] = "... zum L&ouml;schen verwenden";
    ps[380] = "Umgebung r&auml;umen";
    ps[381] = "Alle Z&uuml;ndquellen entfernen, wenn gefahrlos m&ouml;glich";
    ps[390] = "Versch&uuml;ttete Mengen aufnehmen, um Materialsch&auml;den zu vermeiden";
    ps[391] = "Versch&uuml;ttete Mengen aufnehmen";
	
    ps[401] = "... aufbewahren";
    ps[402] = "An einem trockenen Ort aufbewahren";
    ps[403] = "An einem gut bel&uuml;fteten Ort aufbewahren.";
    ps[404] = "In einem geschlossenen Beh&auml;lter aufbewahren";
    ps[405] = "Unter Verschluss aufbewahren";
    ps[406] = "In korrosionsbest&auml;ndigem /… Beh&auml;lter mit korrosionsbest&auml;ndiger Auskleidung aufbewahren";
    ps[407] = "Luftspalt zwischen Stapeln / Paletten lassen";
    ps[410] = "Vor Sonnenbestrahlung sch&uuml;tzen";
    ps[411] = "Bei Temperaturen von nicht mehr als ... &deg;C / … aufbewahren";
    ps[412] = "Nicht Temperaturen von mehr als 50 &deg;C aussetzen";
    ps[413] = "Sch&uuml;ttgut in Mengen von mehr als ... kg bei Temperaturen von nicht mehr als ... °C aufbewahren";
    ps[420] = "Von anderen Materialien entfernt aufbewahren";
    ps[422] = "Inhalt in / unter ... aufbewahren";
	
	
    ps[501] = "Inhalt / Beh&auml;lter … zuf&uuml;hren.";
    ps[502] = "Informationen zur Wiederverwendung/Wiederverwertung beim Hersteller/Lieferanten erfragen.";
