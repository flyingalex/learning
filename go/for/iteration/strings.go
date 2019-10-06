package iteration

import (
	"strings"
)

func Compare(a, b string) int {
	return strings.Compare(a, b)
}

func Contains(s, substr string) bool {
	return strings.Contains(s, substr)
}
