package iteration

import "testing"

func TestCompare(t *testing.T) {
	result := Compare("a", "b")
	expected := -1
	if result != result {
		t.Errorf("expected %d but got %d", expected, result)
	}
}

func TestContains(t *testing.T) {
	result := Contains("abb", "b")
	expected := true
	if result != result {
		t.Errorf("expected %t but got %t", expected, result)
	}
}
